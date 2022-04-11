class Multimedia {
    constructor(url) {
        //Establece el atributo privado
        let _url = url
        //Función flecha que devuelve _url
        this.getUrl = () => _url
    }

    //Getter
    get url() {
        return this.getUrl()
    }

    //Método para recibir/agregar tiempo de inicio a la url del iFrame
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video (Desde setInicio en class Multimedia)"
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        //Establece el atributo privado
        let _id = id
        this.getId = () => { return _id }
    }

    //Getter
    get id() {
        return this.getId()
    }

    //Setter
    set id(newId) {
        this.setId(newId)
    }

    playMultimedia() {
        //Obtener el elemento en un iframe; accedemos al <iframe>elemento dentro de JavaScript usando el document.getElementById() método pasando iframe id (this.getId()) como argumento.
        setIframe.responseSetIframePrivateFunction(this.getUrl(), this.getId())
    }

    //Tiempo de inicio a la URL de la etiqueta iframe
    setInicio(execTime=0) {
        //Ahora se tiene una propiedad contentWindow  que devuelve el objeto document mediante el cual podemos acceder a los elementos desde un Iframe.
        const iframeElement = document.getElementById(this.getId())
        iframeElement.setAttribute('src', `${this.getUrl()}?start=${execTime}`);
        console.log(`Este método es para realizar un cambio en la URL del video; el video debería comenzar a los ${execTime}`)
    }
}

//Patrón de modulo por edio IIFE
const setIframe = (() => {
    const setIframePrivate = (newUrl, newId) => {
        const iframeElement = document.getElementById(newId);
        iframeElement.setAttribute('src', newUrl);
    }
    return {
        responseSetIframePrivateFunction: setIframePrivate,
    }
})();

//Música
const reproductorMusica = new Reproductor('https://www.youtube.com/embed/rxYGt1fqZIo?autoplay=1', 'iframeMusica');
reproductorMusica.playMultimedia();
reproductorMusica.setInicio('20');

//Películas
const reproductorPeliculas = new Reproductor('https://www.youtube.com/embed/TUADs-CK7vI', 'iframePeliculas');
reproductorPeliculas.playMultimedia();
reproductorPeliculas.setInicio('150');

//Series
const reproductorSeries = new Reproductor('https://www.youtube.com/embed/RKK7wGAYP6k', 'iframeSeries');
reproductorSeries.playMultimedia();
reproductorSeries.setInicio('130');
