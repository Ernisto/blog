'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './post.events';

var PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  blog: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}
});

registerEvents(PostSchema);
export default mongoose.model('Post', PostSchema);
