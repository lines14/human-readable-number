function toReadable(number) {
    let str = number.toString();
    let i = 0;
    let newStr = '';

    if (str.length === 3) {

        while (i < str.length) {

            if (i === 0) {

                switch (str[i]) {
                    case '1':
                        newStr = `${newStr}${'one hundred'}`;
                        break;
                    case '2':
                        newStr = `${newStr}${'two hundred'}`;
                        break;
                    case '3':
                        newStr = `${newStr}${'three hundred'}`;
                        break;
                    case '4':
                        newStr = `${newStr}${'four hundred'}`;
                        break;
                    case '5':
                        newStr = `${newStr}${'five hundred'}`;
                        break;
                    case '6':
                        newStr = `${newStr}${'six hundred'}`;
                        break;
                    case '7':
                        newStr = `${newStr}${'seven hundred'}`;
                        break;
                    case '8':
                        newStr = `${newStr}${'eight hundred'}`;
                        break;
                    default:
                        newStr = `${newStr}${'nine hundred'}`;
                };



            } else if (i === 1) {

                switch (str[i]) {
                    case '1':


                        switch (str[str.length - 1]) {
                            case '0':
                                newStr = `${newStr} ${'ten'}`;
                                break;
                            case '1':
                                newStr = `${newStr} ${'eleven'}`;
                                break;
                            case '2':
                                newStr = `${newStr} ${'twelve'}`;
                                break;
                            case '3':
                                newStr = `${newStr} ${'thirteen'}`;
                                break;
                            case '4':
                                newStr = `${newStr} ${'fourteen'}`;
                                break;
                            case '5':
                                newStr = `${newStr} ${'fifteen'}`;
                                break;
                            case '6':
                                newStr = `${newStr} ${'sixteen'}`;
                                break;
                            case '7':
                                newStr = `${newStr} ${'seventeen'}`;
                                break;
                            case '8':
                                newStr = `${newStr} ${'eighteen'}`;
                                break;
                            default:
                                newStr = `${newStr} ${'nineteen'}`;
                        };
                        break;


                    case '2':
                        newStr = `${newStr} ${'twenty'}`;
                        break;
                    case '3':
                        newStr = `${newStr} ${'thirty'}`;
                        break;
                    case '4':
                        newStr = `${newStr} ${'forty'}`;
                        break;
                    case '5':
                        newStr = `${newStr} ${'fifty'}`;
                        break;
                    case '6':
                        newStr = `${newStr} ${'sixty'}`;
                        break;
                    case '7':
                        newStr = `${newStr} ${'seventy'}`;
                        break;
                    case '8':
                        newStr = `${newStr} ${'eighty'}`;
                        break;
                    default:
                        if (str[i] === '9') {
                            newStr = `${newStr} ${'ninety'}`;
                        } else {
                            newStr = `${newStr}${''}`;
                        };
                };
            } else {


                if (str[str.length - 2] === '1') {

                    switch (str[i]) {
                        case '1':
                            newStr = `${newStr}${''}`;
                            break;
                        case '2':
                            newStr = `${newStr}${''}`;
                            break;
                        case '3':
                            newStr = `${newStr}${''}`;
                            break;
                        case '4':
                            newStr = `${newStr}${''}`;
                            break;
                        case '5':
                            newStr = `${newStr}${''}`;
                            break;
                        case '6':
                            newStr = `${newStr}${''}`;
                            break;
                        case '7':
                            newStr = `${newStr}${''}`;
                            break;
                        case '8':
                            newStr = `${newStr}${''}`;
                            break;
                        default:
                            newStr = `${newStr}${''}`;
                    };

                } else {

                    switch (str[i]) {
                        case '0':
                            newStr = `${newStr}${''}`;
                            break;
                        case '1':
                            newStr = `${newStr} ${'one'}`;
                            break;
                        case '2':
                            newStr = `${newStr} ${'two'}`;
                            break;
                        case '3':
                            newStr = `${newStr} ${'three'}`;
                            break;
                        case '4':
                            newStr = `${newStr} ${'four'}`;
                            break;
                        case '5':
                            newStr = `${newStr} ${'five'}`;
                            break;
                        case '6':
                            newStr = `${newStr} ${'six'}`;
                            break;
                        case '7':
                            newStr = `${newStr} ${'seven'}`;
                            break;
                        case '8':
                            newStr = `${newStr} ${'eight'}`;
                            break;
                        default:
                            newStr = `${newStr} ${'nine'}`;
                    };
                };



            };
            ++i;
        };
        return newStr;

    } else if (str.length === 2) {

        while (i < str.length) {

            if (i === 0) {
                switch (str[i]) {
                    case '1':


                        switch (str[str.length - 1]) {
                            case '0':
                                newStr = `${newStr}${'ten'}`;
                                break;
                            case '1':
                                newStr = `${newStr}${'eleven'}`;
                                break;
                            case '2':
                                newStr = `${newStr}${'twelve'}`;
                                break;
                            case '3':
                                newStr = `${newStr}${'thirteen'}`;
                                break;
                            case '4':
                                newStr = `${newStr}${'fourteen'}`;
                                break;
                            case '5':
                                newStr = `${newStr}${'fifteen'}`;
                                break;
                            case '6':
                                newStr = `${newStr}${'sixteen'}`;
                                break;
                            case '7':
                                newStr = `${newStr}${'seventeen'}`;
                                break;
                            case '8':
                                newStr = `${newStr}${'eighteen'}`;
                                break;
                            default:
                                newStr = `${newStr}${'nineteen'}`;
                        };
                        break;


                    case '2':
                        newStr = `${newStr}${'twenty'}`;
                        break;
                    case '3':
                        newStr = `${newStr}${'thirty'}`;
                        break;
                    case '4':
                        newStr = `${newStr}${'forty'}`;
                        break;
                    case '5':
                        newStr = `${newStr}${'fifty'}`;
                        break;
                    case '6':
                        newStr = `${newStr}${'sixty'}`;
                        break;
                    case '7':
                        newStr = `${newStr}${'seventy'}`;
                        break;
                    case '8':
                        newStr = `${newStr}${'eighty'}`;
                        break;
                    default:
                        if (str[i] === '9') {
                            newStr = `${newStr}${'ninety'}`;
                        } else {
                            newStr = `${newStr}${''}`;
                        };
                };
            } else {


                if (str[str.length - 2] === '1') {

                    switch (str[i]) {
                        case '1':
                            newStr = `${newStr}${''}`;
                            break;
                        case '2':
                            newStr = `${newStr}${''}`;
                            break;
                        case '3':
                            newStr = `${newStr}${''}`;
                            break;
                        case '4':
                            newStr = `${newStr}${''}`;
                            break;
                        case '5':
                            newStr = `${newStr}${''}`;
                            break;
                        case '6':
                            newStr = `${newStr}${''}`;
                            break;
                        case '7':
                            newStr = `${newStr}${''}`;
                            break;
                        case '8':
                            newStr = `${newStr}${''}`;
                            break;
                        default:
                            newStr = `${newStr}${''}`;
                    };

                } else {

                    switch (str[i]) {
                        case '0':
                            newStr = `${newStr}${''}`;
                            break;
                        case '1':
                            newStr = `${newStr} ${'one'}`;
                            break;
                        case '2':
                            newStr = `${newStr} ${'two'}`;
                            break;
                        case '3':
                            newStr = `${newStr} ${'three'}`;
                            break;
                        case '4':
                            newStr = `${newStr} ${'four'}`;
                            break;
                        case '5':
                            newStr = `${newStr} ${'five'}`;
                            break;
                        case '6':
                            newStr = `${newStr} ${'six'}`;
                            break;
                        case '7':
                            newStr = `${newStr} ${'seven'}`;
                            break;
                        case '8':
                            newStr = `${newStr} ${'eight'}`;
                            break;
                        default:
                            newStr = `${newStr} ${'nine'}`;
                    };
                };



            };
            ++i;
        };
        return newStr;











    } else {
        switch (str[i]) {
            case '0':
                newStr = `${newStr}${'zero'}`;
                break;
            case '1':
                newStr = `${newStr}${'one'}`;
                break;
            case '2':
                newStr = `${newStr}${'two'}`;
                break;
            case '3':
                newStr = `${newStr}${'three'}`;
                break;
            case '4':
                newStr = `${newStr}${'four'}`;
                break;
            case '5':
                newStr = `${newStr}${'five'}`;
                break;
            case '6':
                newStr = `${newStr}${'six'}`;
                break;
            case '7':
                newStr = `${newStr}${'seven'}`;
                break;
            case '8':
                newStr = `${newStr}${'eight'}`;
                break;
            default:
                newStr = `${newStr}${'nine'}`;
        };
        return newStr;








    };
};

console.log(toReadable(3));