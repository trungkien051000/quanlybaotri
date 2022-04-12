import { regex } from '@utils/constants';

export const isEmail = (value: string) => {
    if (regex.RULE.EMAIL.test(value)) {
        return true;
    }

    return false;
};

export const isIp = (value: string) => {
    if (regex.RULE.IP.test(value)) {
        return true;
    }
    return false;
};

export const isEmpty = (value: string) => {
    if (!value) {
        return true;
    }

    return false;
};
