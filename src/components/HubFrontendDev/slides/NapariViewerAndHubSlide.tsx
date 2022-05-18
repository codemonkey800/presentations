import { PluginShowcase } from 'src/components/HubFrontendDev/PluginShowcase'
import { HubIcon } from 'src/components/icons'

export function NapariViewerAndHubSlide() {
  return (
    <section className="!text-black">
      <section className="!flex flex-col items-center">
        <h1 className="!text-6xl">napari</h1>
        <p className="!text-2xl">Multi-dimensional image viewer for python</p>

        <img
          alt="napari-viewer"
          src="https://napari.org/_images/screenshot-add-image.png"
          width="80%"
        />
      </section>

      <section>
        <HubIcon className="w-full" />
        <h1 className="!mt-20">napari hub</h1>
      </section>
      <section>
        <h1 className="!mb-20 !text-4xl">
          A place to discover, install, and share napari plugins
        </h1>

        <PluginShowcase />
      </section>
      <section>
        <iframe
          className="w-screen h-[90vh] bg-white"
          title="plugin-page"
          src="https://www.napari-hub.org"
        />
      </section>
    </section>
  )
}
