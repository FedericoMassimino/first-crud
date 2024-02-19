import {User} from '../models/user.model';

export const users: User[] = [
    {
        id: "1",
        name: {
            surName: "Rossi",
            lastName: "Mario"
        },
        age: "30",
        email: "mario.rossi@example.com",
        password: "password123"
    },
    {
        id: "2",
        name: {
            surName: "Bianchi",
            lastName: "Paola"
        },
        age: "25",
        email: "paola.bianchi@example.com",
        password: "securepassword"
    },
    {
        id: "3",
        name: {
            surName: "Verdi",
            lastName: "Luigi"
        },
        age: "40",
        email: "luigi.verdi@example.com",
        password: "strongpassword"
    },
    {
        id: "4",
        name: {
            surName: "Ferrari",
            lastName: "Giulia"
        },
        age: "22",
        email: "giulia.ferrari@example.com",
        password: "password1234"
    },
    {
        id: "5",
        name: {
            surName: "Russo",
            lastName: "Sara"
        },
        age: "35",
        email: "sara.russo@example.com",
        password: "password5678"
    }
];