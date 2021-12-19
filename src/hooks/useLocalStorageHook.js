import {
    useState
} from 'react';

export default function useLocalStorageHook(key, initialValue) {
    const [userState, setUserState] = useState(() => {
        try {
            let current = localStorage.getItem(key);
            if (current) {
                return JSON.parse(current);
            } else {
                return initialValue;
            }
        } catch (err) {
            console.log(err);
            return initialValue;
        }
    })

    const setCurrent = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setUserState(value);

        } catch (err) {
            console.log(err);
        }
    }
    return [
        userState, setCurrent
    ]
}