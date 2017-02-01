/*É a ideia de separar a aplicação em vários processos, pois o código
não é sempre Linear e sim paralelo e concorrente, o número de clusters é dado por:

Nº Processadores * Nº de núcelos

*/
import cluster from "cluster";
import os from "os";
const CPUS = os.cpus();
if (cluster.isMaster) {
    CPUS.forEach(() => cluster.fork());
    cluster.on("listening", worker => {
        console.log("Cluster %d conectado", worker.process.pid);
    });
    cluster.on("disconnect", worker => {
        console.log("Cluster %d desconectado", worker.process.pid);
    });
    cluster.on("exit", worker => {
        console.log("Cluster %d saiu do ar", worker.process.pid);
        cluster.fork();
        // Garante que um novo cluster inicie se um antigo morrer
    });
} else {
    require("./index.js");
}
