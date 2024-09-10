export class MediaElementTypes {
   static FILE = 'file';
   static TEMPLATE = 'template'
   static LIST = 'list'
   static FRACTO_IMAGE = 'fracto_image'
}

export class MediaShapeTypes {
   static STRING = 'string'
   static WHOLE_NUMBER = 'whole_number'
   static REAL_NUMBER = 'real_number'
   static COMPLEX_NUMBER = 'complex_number'
   static JSON = 'json'
   static DATETIME = 'datetime'
   static STATUS = 'status'
}

export class MediaShapeTypeStatus {
   static DRAFT = 'draft'
   static PUBLISHED = 'published'
   static ARCHIVED = 'archived'
}

class MediaMetaShapes {
   static BASIS = {
      title: MediaShapeTypes.STRING,
      description: MediaShapeTypes.STRING,
      status: MediaShapeTypes.STATUS,
      drafted: MediaShapeTypes.DATETIME,
      published: MediaShapeTypes.DATETIME,
      achivied: MediaShapeTypes.DATETIME,
   }
   static FILE = {
      filename: MediaShapeTypes.STRING,
      filesize: MediaShapeTypes.WHOLE_NUMBER,
      filetype: MediaShapeTypes.STRING,
   }
   static FRACTO_IMAGE = {
      scope: MediaShapeTypes.REAL_NUMBER,
      focal_point: MediaShapeTypes.COMPLEX_NUMBER,
      width_px: MediaShapeTypes.WHOLE_NUMBER,
      aspect_ratio: MediaShapeTypes.REAL_NUMBER,
   }
}

export var MEDIA_ELEMENT_SHAPES = {}
MEDIA_ELEMENT_SHAPES[MediaElementTypes.FILE] = Object.assign(
   {}, MediaMetaShapes.FILE, MediaMetaShapes.BASIS)
MEDIA_ELEMENT_SHAPES[MediaElementTypes.FRACTO_IMAGE] = Object.assign(
   {}, MediaMetaShapes.FRACTO_IMAGE, MediaMetaShapes.BASIS)
