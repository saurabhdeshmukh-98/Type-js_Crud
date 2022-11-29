import express, { Request, Response } from "express";
import { db } from "../config/db";

const record = db.collection("record2");

const add = async (req: Request, res: Response) => {
  try {
    const resp = await record.insertOne(req.body);
    console.log(resp);
    res.status(200).json({
      response: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
    });
  }
};
const fetch = async (req: Request, res: Response) => {
  try {
    const resp = await record.find().toArray();
    console.log(resp);
    res.status(200).json({
      response: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
    });
  }
};
const fetchOne = async (req: Request, res: Response) => {
  try {
    const resp = await record.findOne(req.body.name);
    res.status(200).json({
      response: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
    });
  }
};
const removeOne = async (req: Request, res: Response) => {
  try {
    const resp = await record.deleteOne({ name: req.params.name });
    res.status(200).json({
      response: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
    });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const name = req.body.firstName;
    const resp = await record.updateOne(
      { Name: name },
      {
        $set: {
          email: req.body.email,
        },
      }
    );
    res.status(200).json({
      response: resp,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      response: null,
    });
  }
};

export { add, fetch, fetchOne, removeOne, update };
