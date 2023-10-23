const About = () => (
  <section className="about">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="fractal"
            src="https://farm7.staticflickr.com/6224/6380642607_4edffe9e96_o.png"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">Qué es la conjetura de Collatz</h2>

          <p class="mt-4 text-gray-400 font-medium">
            El algoritmo 3n + 1, también conocido como la conjetura de Collatz, es un algoritmo que se aplica a cualquier número entero positivo de la siguiente manera
          </p>
          <ol>
            <li>1. Si el número es par, se divide entre 2.</li>
            <li>2. Si el número es impar, se multiplica por 3 y se suma 1.</li>
          </ol>
          <p>
            Este proceso se repite con el número resultante hasta que se alcanza el valor 1.
            Aunque este algoritmo parece simple, la conjetura de Collatz, que afirma que este proceso siempre llegará a 1 sin importar con qué número entero positivo comencemos, aún no ha sido demostrada.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About