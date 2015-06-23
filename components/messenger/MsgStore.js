var MsgStore = (function () {
    function MsgStore() {
        this.msgs = [
            { title: "Hello", msg: "This is Hello Message" },
            { title: "Meeting", msg: "This is Meeting Message" },
            { title: "Good bye", msg: "This is Good bye Message" }
        ];
    }
    MsgStore.prototype.getAll = function () {
        return this.msgs;
    };
    return MsgStore;
})();
exports.MsgStore = MsgStore;
