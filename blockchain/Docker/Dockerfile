FROM ubuntu:18.04
COPY . /app
RUN 
RUN sudo geth --http  --http.port "8085" --datadir ./agriculture-network init ./"agriculture-network"/genesis.json
