//Add your initialization logic here

declare var require;
declare var $;

require.config = {
    baseUrl: 'scripts'
};

import PainterDetailsController = require('./controllers/PainterDetailsController');
import PaintersListController = require('./controllers/PaintersListController');

$(document).ready(function() {
    var detailsController = new PainterDetailsController();
    var paintersController = new PaintersListController(detailsController);
    paintersController.showPainters();
});