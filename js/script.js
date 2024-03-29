document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = {
        burger: document.querySelector('.menu__burger'),
        menuItems: document.querySelectorAll('.menu__item'),
        isChanging: false,
        burgerStart: function () {
            let that = this,
                changingTime = 500,
                disabledTime = 4000; //время которое меню не будет откликаться на клики, чтобы не было багов
            this.burger.addEventListener('click', function () {

                if (that.isChanging == false) {
                    that.isChanging = true;
                    that.burger.classList.contains('close') ? (showOrHideMenuItems('none', 0)) : (showOrHideMenuItems('block', 1));
                }

            });

            function changeOver() {
                burgerMenu.burger.style.opacity=.3;
                        setTimeout(function () {
                            that.isChanging = false;
                               burgerMenu.burger.style.opacity=1;
                        }, disabledTime);
                    }
            
            function showOrHideMenuItems(displayVal, opacityVal) {
                         
          
                if (displayVal) {

                    
                    for (let item of that.menuItems) {


                        if (displayVal == 'none') {
                            that.burger.classList.remove('close');
                    setTimeout(function () {item.style.display = displayVal; 
                    }, changingTime);
                    setTimeout(function () {item.style.opacity = opacityVal;
                    }, changingTime / 2);
                            changeOver();
                        } else {
                            that.burger.classList.add('close');
                    setTimeout(function () {item.style.display = displayVal;
                    }, changingTime / 2);
                    setTimeout(function () {item.style.opacity = opacityVal;
                    }, changingTime);
                            changeOver();


                        }


                    }

                } 
            
                
                
            }
        }
    };
    burgerMenu.burgerStart();
})
