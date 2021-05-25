/* eslint-disable import/no-webpack-loader-syntax */
import React, { useCallback } from "react";
import { Button, Grid } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import worker from "workerize-loader!../../utils/worker";

function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
}

function makefile(data, fileName) {
  var a = document.createElement("a");
  var json = JSON.stringify(data),
      blob = new Blob([json], {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

export default function Download() {
  
  const exp = useCallback(() => {
    let arr = [];
    for (let index = 0; index < 5000000; index++) {
      const a = makeid(30);
      arr.push(a);
    }
    makefile(arr, "teste.txt");
  }, []);

  const { exp2 } = worker();

  const work = useCallback(async () => {
    const arr = await exp2();
    makefile(arr, "teste.txt");
  }, [exp2]);

  return (
    <>
      <PageTitle title="Exportar Dados" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={exp}
          >
            exportar dados
          </Button>

          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={work}
          >
            exportar dados with workers
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
