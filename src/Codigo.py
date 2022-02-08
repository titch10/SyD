import cv2
import numpy as np

# img = cv2.imread("C:\\Users\Diana\Desktop\Proyecto Terminal\IMG_20210903_110844.jpg")
imagen = cv2.imread("images.jpg")  # 05 QUITAR EL RESIZE AL DESCOMENTAR ESTO
# imagen = cv2.imread("images1.jpg")  # 06 QUITAR EL RESIZE AL DESCOMENTAR ESTO
# imagen = cv2.imread("Mos3.jpg") # 0 - 8000
# imagen = cv2.imread("C:\\Users\Diana\Desktop\Proyecto Terminal\Mos4.jpg")
# imagen = cv2.imread("Plantita.jpeg") # 50 -750 no
# imagen = cv2.imread("Plantita2.jpeg") # 250-950
# imagen = cv2.imread("Plantita3.jpeg") ## NOOOOO
# imagen = cv2.imread("Plantita4.jpeg")
# imagen = cv2.imread("Plantita5.jpeg")

# imagen = cv2.resize(img, (433, 577))
# cv2.imshow('Imagen Original', imagen)
height, width = imagen.shape[0:2]


# def detectarpoligono(imagen):

# Aplicacion de Canny realza los bordes y los extrae
mascara = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)
# dos parametros del minimo y maximo canny y los valores dependen de la camara
mascara = cv2.Canny(mascara, 90, 200)

# Realce de bordes
kernel = np.ones((8, 8), np.uint8)
mascara = cv2.dilate(mascara, kernel, iterations=1)

 # Hallar contornos
 # cv2.imshow("mascara1", mascara)
 # contornos, jerarquia = cv2.findContours(mascara, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contornos,_= cv2.findContours(mascara, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
areas = []
i = 0
for contornoActual in contornos:
    areas.append(cv2.contourArea(contornoActual))
    # areas = cv2.contourArea(contornoActual[i])
    
    #i = 0
    for areaActual in areas:
        if areaActual > 1000:  # 5000
            figuraActual = contornos[i]
            vertices = cv2.approxPolyDP(figuraActual, 0.05*cv2.arcLength(figuraActual, True), True)
            if len(vertices) == 4:
                #mensaje = "Mosca"
                #cv2.putText(imagen, mensaje, (10, 70), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)
                #cv2.drawContours(imagen, [figuraActual], 0, (0, 0, 255), 2)

                AzulBajo = np.array([0, 0, 100], np.uint8)
                AzulAlto = np.array([180, 30, 255], np.uint8)

                while True:
                    frame = imagen
                    frameHSV = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
                    mask = cv2.inRange(frameHSV, AzulBajo, AzulAlto)
                    contornos, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

                    for c in contornos:
                        area = cv2.contourArea(c)
                        if area > 100 and area < 950:
                            nuevoContorno = cv2.convexHull(c)
                            cv2.drawContours(frame, [nuevoContorno], 0, (255, 0, 0), 0)
                            print('Numero de contornos encontrados: ', len(contornos))
                            # texto = 'Mosquita encontrada: ' + str(len(contornos))
                            # cv2.putText(frame, texto, (10, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 0), 1)
                        # cv2.imshow('maskAzul', mask)
                        # cv2.imshow('frame', frame)
                        if cv2.waitKey(1) & 0xFF == ord('q'):
                            break
        i+1
#     #return imagen

# while True:
#     img = detectarpoligono(imagen)
cv2.waitKey()
cv2.destroyAllWindows()
