const ServerLayout = (app) => {
  return (
    `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8"></meta>
      </head>
      <body>
        ${app}
      </body>
    </HTML>
    `
  );
}

export default ServerLayout;
