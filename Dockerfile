FROM repo.adeo.no:5443/pus/decorator:41.20180601.1450
ENV APPLICATION_NAME=soknad-kontantstotte
ENV HEADER_TYPE=WITHOUT_MENU
COPY ./dist /app
COPY ./VERSION /app/VERSION
COPY ./proxy.json /app