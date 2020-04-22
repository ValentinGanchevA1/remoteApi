var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.CouponChecker == "undefined") {
    PTK.CouponChecker = {
        validateCoupon: function(c) {
            var d = $(c);
            var e = d.value;
            var a = 16;
            var b = e.replace(/\D+/g, "");
            if (b.length != a) {
                $("voucher-error").addClassName("hidden");
                $("voucher-length-error").removeClassName("hidden");
                return false
            } else {
                d.value = b;
                return true
            }
        }
    }
};