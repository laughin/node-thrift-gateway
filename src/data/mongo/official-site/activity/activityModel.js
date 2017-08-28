var mongoose = require('mongoose')
var Schema = mongoose.Schema

/**
 * 活动
 * title: 标题
 * content: 内容
 * date: 时间
 * address: 地点
 * sponsor: 主办方
 */
var ActivitySchema = new Schema({
  title: {
    type: String,
    default: '',
    required: '请填写名称'
  },
  content: {
    type: String,
    default: '',
    required: '请填写描述'
  },
  date: {
    type: String,
    default: '',
    required: '请填写时间'
  },
  address: {
    type: String,
    default: '',
    required: '请填写地点'
  },
  sponsor: {
    type: String,
    default: '',
    required: '请填写主办方'
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

ActivitySchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

module.exports = mongoose.model('Activity', ActivitySchema)
