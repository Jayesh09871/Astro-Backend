import request from 'supertest'; 
import app from './index.mjs'; 

import seekerModel from './models/seekerModel.js';

import { assignSeeker, toggleTopGuru } from './controllers/guruController.js';

describe('Seeker Routes', () => {
    describe('POST /seeker/createSeeker', () => {
        it('should create a new seeker', async () => {
            const seekerData = {
                name: 'Test Seeker',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            };

            const res = await request(app)
                .post('/seeker/createSeeker')
                .send(seekerData);

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('ok');
            expect(res.body.message.name).toBe(seekerData.name);
            expect(res.body.message.email).toBe(seekerData.email);
        });
    });
});

describe('Guru Controller', () => {
    describe('assignSeeker', () => {
        it('should assign a seeker to a guru', async () => {
            const newSeeker = await seekerModel.create({
                name: 'Test Seeker',
                gender: 'male',
                dob: '1990-01-01',
                phone: '1234567890',
                email: 'test@example.com',
                password: 'password'
            });

            const result = await assignSeeker();

            expect(result.guruId).toBeDefined();

            await seekerModel.findByIdAndDelete(newSeeker._id);
        });
    });

    describe('toggleTopGuru', () => {
        it('should toggle the top status of a guru', async () => {
            const newGuru = await guruModel.create({
                name: 'Test Guru',
                top: false
            });

            const result = await toggleTopGuru(newGuru._id);

            expect(result.guru.top).toBe(true);

            await guruModel.findByIdAndDelete(newGuru._id);
        });
    });
});
