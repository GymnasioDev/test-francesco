#!/bin/bash

# export NODE_OPTIONS="--no-experimental-require-module"

# Spostarsi nella cartella backend
cd backend || { echo "Errore: Impossibile accedere alla cartella backend"; exit 1; }

# Installare DynamoDB
sls dynamodb install || { echo "Errore durante l'installazione di DynamoDB"; exit 1; }

# Avviare il server
serverless offline start || { echo "Errore durante l'avvio del server"; exit 1; }
