({
    render : function(component, helper) {
        var ret = this.superRender();
        helper.startAutoPlay(component);
        return ret;
    },

    unrender : function(component, helper) {
        var ret = this.superUnrender();
        helper.stopAutoPlay(component);
        return ret;
    }

})
