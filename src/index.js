import Control from './control'
import Preview from './preview'

if (typeof window !== 'undefined') {
  window.Control = Control
  window.Preview = Preview
}

export { Control, Preview }
// import withFileControl from './withFileControl'
// import previewComponent from './FilePreview'
// import schema from './schema'

// const controlComponent = withFileControl()
// const Widget = (opts = {}) => ({
//     name: 'file',
//     controlComponent,
//     previewComponent,
//     schema,
//     ...opts,
// })

// export const NetlifyCmsWidgetFile = {
//     Widget,
//     controlComponent,
//     previewComponent,
//     withFileControl,
// }
// export default NetlifyCmsWidgetFile
