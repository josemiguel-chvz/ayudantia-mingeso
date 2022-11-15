FROM adoptopenjdk:11-jre-hotspot
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]