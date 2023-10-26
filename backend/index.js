import express from 'express'
import mongoose from 'mongoose'
import connectDB from './config/connectDB.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => res.status(234).send('Welcome to MERN Stack Tutorial'))

