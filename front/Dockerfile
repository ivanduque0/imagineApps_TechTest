FROM teracy/angular-cli:latest

ENV USUARIO=app
ENV GRUPO=app
ENV GID=1000
ENV UID=1000


RUN groupmod -g 1002 node && usermod -u 1002 node
RUN addgroup --system --GID $GID $GRUPO && adduser --system --UID $UID $USUARIO --ingroup $GRUPO

ENV APP_HOME=/home/$USUARIO/angular
RUN mkdir $APP_HOME
RUN chown -R $USUARIO:$GRUPO $APP_HOME
WORKDIR $APP_HOME
USER $USUARIO

EXPOSE 4200/TCP