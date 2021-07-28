<template>
  <div id="table-container"></div>
</template>


<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.csv.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
<script src="js/csv_to_html_table.js"></script>

<script>

export default {
  name: "AppDataTable",
};

function format_link(link) {
  if (link) return "<a href='" + link + "' target='_blank'>" + link + "</a>";
  else return "";
}


CsvToHtmlTable.init({
  csv_path: "data/Relatorio_cadop.csv",
  element: "table-container",
  allow_download: false,
  csv_options: {
    separator: ";",
    delimiter: '"',
  },
  datatables_options: {
    paging: false,
  },
  custom_formatting: [[4, format_link]],
});
</script>


<style scoped>
@font-face {
    font-family: 'GibsonSemiBold';
    src: url('/css/fonts/gibson-semibold-webfont.eot');
    src: url('/css/fonts/gibson-semibold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/css/fonts/gibson-semibold-webfont.woff') format('woff'),
         url('/css/fonts/gibson-semibold-webfont.ttf') format('truetype'),
         url('/css/fonts/gibson-semibold-webfont.svg#GibsonSemiBold') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GibsonBold';
    src: url('/css/fonts/gibson-bold-webfont.eot');
    src: url('/css/fonts/gibson-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('/css/fonts/gibson-bold-webfont.woff') format('woff'),
         url('/css/fonts/gibson-bold-webfont.ttf') format('truetype'),
         url('/css/fonts/gibson-bold-webfont.svg#GibsonBold') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ColaborateThinRegular';
    src: url('/css/fonts/ColabThi-webfont.eot');
    src: url('/css/fonts/ColabThi-webfont.eot?#iefix') format('embedded-opentype'),
         url('/css/fonts/ColabThi-webfont.woff') format('woff'),
         url('/css/fonts/ColabThi-webfont.ttf') format('truetype'),
         url('/css/fonts/ColabThi-webfont.svg#ColaborateThinRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ColaborateRegRegular';
    src: url('http://www.housingstudies.org/static/css/fonts/ColabReg-webfont.eot');
    src: url('http://www.housingstudies.org/static/css/fonts/ColabReg-webfont.eot?#iefix') format('embedded-opentype'),
         url('http://www.housingstudies.org/static/css/fonts/ColabReg-webfont.woff') format('woff'),
         url('http://www.housingstudies.org/static/css/fonts/ColabReg-webfont.ttf') format('truetype'),
         url('http://www.housingstudies.org/static/css/fonts/ColabReg-webfont.svg#ColaborateRegRegular') format('svg');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'AlegreyaBold';
    src: url('http://www.housingstudies.org/static/css/fonts/Alegreya-Bold-webfont.eot');
    src: url('http://www.housingstudies.org/static/css/fonts/Alegreya-Bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('http://www.housingstudies.org/static/css/fonts/Alegreya-Bold-webfont.woff') format('woff'),
         url('http://www.housingstudies.org/static/css/fonts/Alegreya-Bold-webfont.ttf') format('truetype'),
         url('http://www.housingstudies.org/static/css/fonts/Alegreya-Bold-webfont.svg#AlegreyaBold') format('svg');
    font-weight: normal;
    font-style: normal;
}

    
body { 
  font: 18px/1.3em 'ColaborateThinRegular', sans-serif;
}

h1 {
  font: 32px/1em 'GibsonBold', serif;
  text-transform: uppercase;
  color: #827E7E;
}

h2 {
  font: 22px/1em 'GibsonBold', serif;
  text-transform: uppercase;
  color: #827E7E;
}

#logo {
  margin-top: 20px;
}

#logo img { width: 170px; }

.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255,255,255,0.8);
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  border-radius: 5px;
}
.info h4 {
  margin: 0 0 5px;
  color: #777;
}

.legend {
  text-align: left;
  line-height: 18px;
  color: #555;
}
.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
  opacity: 0.7;
}
</style>