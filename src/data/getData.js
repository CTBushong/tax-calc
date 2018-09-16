

export default function(country, year, jurisdiction) {

    switch(country) {
        case 'US':
        switch(year) {
            case 2014:
                //code block
                break;
            case 2015:
                //code block
                break;
            case 2016:
                //code block
                break;
            case 2017:
                switch(jurisdiction) {
                    case 'federal':
                        return require('./US/2017/federal.json');
                        break;
                    case 'CA':
                        return require('./US/2017/state/CA.json');
                        break;
                    case 'NY':
                        return require('./US/2017/state/CA.json');
                        break;
                    default:
                        return "bad jurisdiction request";
                }
                break;
            case 2018:
                switch(jurisdiction) {
                    case 'federal':
                        return require('./US/2018/federal.json');
                        break;
                    case 'CA':
                        return require('./US/2018/state/CA.json');
                        break;
                    case 'NY':
                        return require('./US/2018/state/CA.json');
                        break;
                    default:
                        return "bad jurisdiction request";
                }
                break;
            default:
                return "bad year request";
        }
            break;
        case 'CA':
            //code block
            break;
        default:
            return "bad country request";
    }
}