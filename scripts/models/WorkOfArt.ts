/**
 * Created by vmlf on 02-08-2015.
 */

import IWorkOfArt = require('../interfaces/IWorkOfArt');

class WorkOfArt implements IWorkOfArt
{
    name: string;
    year: string;
    typeOfWork: string;
    location: string;
    description: string;
    image: string;
}

export = WorkOfArt;