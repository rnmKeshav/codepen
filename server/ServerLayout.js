// import MainCss from "../src/assets/css/main.css";

const ServerLayout = (app) => {
  return (
    `
    <!DOCTYPE html>
      <head>
        <meta charset="utf-8"></meta>
        
        <script src="./js/temp.js"  async ></script>
        <script src="./js/temp1.js" async  ></script>
        <script src="./js/temp2.js" async></script>
        <script src="./js/temp3.js" async ></script>
        <script src="./js/temp9.js" async  ></script>
        <link rel="preload" href="/font/BigShouldersStencilText-Thin.ttf" as="font" type="font/woff2" crossorigin="anonymous"  >
        <link rel="preload" href="./css/main.css" as="style" onload="this.rel='stylesheet'" >
        </head>
      <body>
        ${app}
      </body>
      
    </HTML>
    `
  );
}

export default ServerLayout;
