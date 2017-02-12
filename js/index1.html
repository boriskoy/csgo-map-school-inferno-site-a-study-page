(function () {

    function Countdown (time) {
        this.minutes        = time.minutes;
        this.seconds        = time.seconds;
        this.centiseconds   = time.centiseconds;
        this.timer          = null;
    }

    Countdown.prototype.start = function () {

        var self = this;

        this.timer = setInterval(function () {
            update();
            decrement();
        }, 10);

        function decrement () {
            self.centiseconds--;
            if (self.centiseconds < 0) {
                self.centiseconds = 99;
                self.seconds--;
                if (self.seconds < 0) {
                    self.seconds = 59;
                    self.minutes--;
                    if (self.minutes < 0) {
                        clearInterval(self.timer);
                    }
                }
            }
        }

        function update () {
            $('#minutes').html(pad(self.minutes));
            $('#seconds').html(pad(self.seconds));
            $('#centiseconds').html(pad(self.centiseconds));

            function pad (number) {
                if (number < 10) {
                    return '0' + number;
                } else {
                    return number;
                }
            }

        };

    };

    return new Countdown({ minutes: 0, seconds: 30, centiseconds: 0  }).start();

}).call();
