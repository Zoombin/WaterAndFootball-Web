(function(window){
    'use strict';
    window.dialog = {
        open: function(func){
            window.dialog[func]();
        },

        //配送信息
        deliverInfo: function(){
            $('#myModal').attr('class', 'modal fade modal-success');
            $('#myModal').find('#modalTitle').html('配送信息');
            $('#myModal').find('#modalBody').load('includes/deliverInfo.html');
            $('#myModal').find('#modalSubmit').html('提交');

            $('#myModal').find('#modalSubmit').unbind().one('click', function(){
                //handle submit event
                console.log('#deliverInfo click');
                $('#myModal').modal('hide');
            });

            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        },

        //出错了
        showError: function(){
            $('#myModal').attr('class', 'modal fade modal-alert');
            $('#myModal').find('#modalTitle').html('出错了');
            $('#myModal').find('#modalBody').empty().append(
                $('<div class="madal-body-main">').html('您的积分不够，请赶紧喝水扫码！')
            );
            $('#myModal').find('#modalSubmit').html('返回抽奖页面');

            $('#myModal').find('#modalSubmit').unbind().one('click', function(){
                //handle submit event
                console.log('#showError click');
                $('#myModal').modal('hide');
            });

            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        },

        //中奖了
        getAward: function(){
            $('#myModal').attr('class', 'modal fade modal-success');
            $('#myModal').find('#modalTitle').html('恭喜您');
            $('#myModal').find('#modalBody').empty().append(
                $('<div class="modal-sub-title">').html('本次抽奖已扣除80积分')
            ).append(
                $('<p class="madal-body-main">').html('获得亚冠1/4决赛恒大主场球票')
            );
            $('#myModal').find('#modalSubmit').html('马上去领奖');

            $('#myModal').find('#modalSubmit').unbind().one('click', function(){
                //handle submit event
                console.log('#getAward click');
                $('#myModal').modal('hide');
            });

            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        },

        //未中奖
        notGetAward: function(){
            $('#myModal').attr('class', 'modal fade modal-info');
            $('#myModal').find('#modalTitle').html('恭喜您');
            $('#myModal').find('#modalBody').empty().append(
                $('<div class="modal-sub-title">').html('本次抽奖已扣除80积分')
            ).append(
                $('<p class="madal-body-main">').html('别气馁，英雄请重新来过！')
            );
            $('#myModal').find('#modalSubmit').html('返回抽奖页面');

            $('#myModal').find('#modalSubmit').unbind().one('click', function(){
                //handle submit event
                console.log('#notGetAward click');
                $('#myModal').modal('hide');
            });

            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            });
        }

    };

})(window);
