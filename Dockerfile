FROM repo.adeo.no:5443/pus/decorator:51.20180703.1029
ENV APPLICATION_NAME=soknad-kontantstotte
ENV HEADER_TYPE=WITHOUT_MENU
ENV CONTEXT_PATH=/
COPY ./dist /app
COPY ./VERSION /app/VERSION
ADD proxy.json /proxy.json