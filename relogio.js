class Relogio {

    constructor() {
        this.locale = "pt-BR";
        this.dateEl = document.querySelector("#date");
        this.timeEl = document.querySelector("#time");
        this.currentDate;
        this.initialize();
    }

    initialize() {
        this.setDateTime();
        setInterval(() => {
            this.setDateTime();
        }, 1000)
    }

    setDateTime() {
        this.date = this.currentDate.toLocaleDateString(this.locale);
        this.time = this.currentDate.toLocaleTimeString(this.locale);
    }

    get date() {
        return this.dateEl.innerHTML;
    }

    set date(value) {
        return this.dateEl.innerHTML = value;
    }

    get time() {
        return this.timeEl.innerHTML;
    }

    set time(value) {
        return this.timeEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        return this.currentDate = value;
    }

}

window.relogio = new Relogio();