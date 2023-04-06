//The functions provided by Mongoose models are deliberately generic
//because they can interact with any collection configured in the schema.
import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'
const tuitsModel = mongoose
              .model('TuitModel', tuitsSchema);
export default tuitsModel;

