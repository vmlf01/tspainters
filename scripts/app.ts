//Add your initialization logic here

declare var require;
declare var $;

require.config = {
    baseUrl: 'scripts'
};

import PaintersListController = require('./controllers/PaintersListController');

$(document).ready(function() {
    var paintersController = new PaintersListController();
    paintersController.showPainters();
});