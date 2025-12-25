#!/bin/bash
# download-assets.sh
mkdir -p assets/{css,js,fonts}

# jQuery
wget -O assets/js/jquery-3.7.0.min.js https://code.jquery.com/jquery-3.7.0.min.js

# DataTables
wget -O assets/css/dataTables.min.css https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css
wget -O assets/js/dataTables.min.js https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js

# Chart.js
wget -O assets/js/chart.min.js https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.js

# Font Awesome
wget -O assets/css/fontawesome.min.css https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
wget -O assets/webfonts/fa-solid-900.woff2 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2
wget -O assets/webfonts/fa-solid-900.ttf https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.ttf
wget -O assets/webfonts/fa-brands-400.woff2 https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-brands-400.woff2
wget -O assets/webfonts/fa-brands-400.ttf https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-brands-400.ttf

# ZangoDB
wget -O assets/js/zango.min.js https://cdn.jsdelivr.net/npm/zangodb@3.4.2/dist/zango.min.js

echo "✅ Todos os arquivos baixados!"