export interface PluginAuthor {
  name: string
  email?: string
}

export type HubDimension = 'Workflow step' | 'Supported data' | 'Image modality'

export type PluginCategory = Partial<{
  [key in HubDimension]: string[]
}>

export enum PluginType {
  Widget = 'widget',
  Reader = 'reader',
  Writer = 'writer',
  SampleData = 'sample_data',
  Theme = 'theme',
}

export enum PluginWriterSaveLayer {
  Image = 'image',
  Points = 'points',
  Shapes = 'shapes',
}

export interface PluginIndexData {
  authors: PluginAuthor[] | ''
  category?: PluginCategory | ''
  description_content_type: string
  description_text: string
  description: string
  development_status: string[] | ''
  display_name?: string
  first_released: string
  license: string
  name: string
  operating_system: string[] | ''
  python_version: string
  release_date: string
  summary: string
  version: string
  plugin_types?: PluginType[]
  reader_file_extensions?: string[]
  writer_file_extensions?: string[]
  writer_save_layers?: PluginWriterSaveLayer[]
}
