'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './blog.events';

var BlogSchema = new mongoose.Schema({
  title: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

registerEvents(BlogSchema);
export default mongoose.model('Blog', BlogSchema);
