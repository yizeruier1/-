window.onload = function(){
	var canvas = document.getElementById('screen');
	var info = document.getElementById('info');
	var gameOver = document.getElementById('gameOver');
	var reStart = document.getElementById('reStart');
	var scoreBox = document.getElementById('score');
	var newGame = document.getElementById('newGame');
	var tip = document.getElementById('tip');
	var score = 0;
	var flag = false;
	var snake_dir;   // 0-1-2-3    上右下左
	var snake_next_dir;
	var snake_speed;     // 蛇的运行速度

	var ctx = canvas.getContext('2d');
	var snake;
	var food = {
			x:0,
			y:0
		};
	function init(){
		snake = [
			{x:7, y:20},
			{x:6, y:20},
			{x:5, y:20},
			{x:4, y:20},
			{x:3, y:20}
		];
		snake_next_dir = 1;
		snake_dir = 1;
		snake_speed = 200;
		tip.innerHTML = "";
		tip.style.transition = null;
		tip.style.fontSize = "28px";
		tip.style.color = "#000";
	}


	//   1 显示 游戏结束 窗口     其他数字显示 新游戏
	function showScreen(num){
		if(num == 1){
			canvas.style.display = 'none';
			info.style.display = 'none';
			gameOver.style.display = 'block';
			reStart.style.display = 'block';
		}else{
			canvas.style.display = 'block';
			info.style.display = 'block';
			gameOver.style.display = 'none';
			reStart.style.display = 'none';
		}
	}

	//  画蛇
	function drawSnake(){
		for(var i = 0; i < snake.length; i++){
			ctx.fillStyle = '#fff';
			ctx.fillRect(snake[i].x*10, snake[i].y*10, 10, 10);
		}
	}

	//  画食物
	function drawFood(){
		ctx.fillStyle = '#fff';
		ctx.fillRect(food.x*10, food.y*10, 10, 10);
	}


	// 碰撞检测
	function check(x, y, _x, _y){
		return (x == _x && y == _y) ? true : false;
	}

	// 添加食物 
	function addFood(){
		food.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
        food.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
        for(var i = 0; i < snake.length; i++){
        	if(check(snake[i].x, snake[i].y, food.x, food.y)){
        		addFood();
        	}
        }
	}

	//  根据按键  改变方向   0-1-2-3    上右下左   38-39-40=37
	function changeDir(num){
		if (num == 38 && snake_dir != 2) {
            snake_next_dir = 0;
        } else {

            if (num == 39 && snake_dir != 3) {
                snake_next_dir = 1;
            } else {

                if (num == 40 && snake_dir != 0) {
                    snake_next_dir = 2;
                } else {

                    if (num == 37 && snake_dir != 1) {
                        snake_next_dir = 3;
                    }
                }
            }
        }
	}

	

	

	//  主循环
	function main(){
		var nextX = snake[0].x;
		var nextY = snake[0].y;
		snake_dir = snake_next_dir;
		switch (snake_dir) {
			case 0:
				nextY--;
				break;
			case 1:
				nextX++;
				break;
			case 2:
				nextY++;
				break;
			case 3:
				nextX--;
				break;
		}

		

		// 判断 蛇 是否撞墙
		if(nextX<0 || nextX==30 || nextY < 0 || nextY ==30){
			//console.log('撞墙');
			showScreen(1);
			return;
		}

		// 判断蛇是否  撞了自己的身体
		for(var i = 0; i < snake.length; i++){
			if(snake[i].x == nextX && snake[i].y == nextY){
				//console.log('庄身体');
				showScreen(1);
				return;
			}
		}


		//  吃食物
		if (check(nextX, nextY, food.x, food.y)) {
            snake.unshift({
                x: nextX,
                y: nextY
            });
            score += 1;
            if(score % 3 == 0){
            	snake_speed -= 30;
            	tip.style.transition = "none";
            	tip.style.color = "#fff";
            	tip.style.fontSize = "28px";
            	tip.innerHTML = "Level Up !";
            	setTimeout(function(){
            		tip.style.transition = "all linear 1.2s";
            		tip.style.color = "#000";
            		tip.style.fontSize = "40px";
            	},800);
            }
            scoreBox.innerHTML = '分数：' + score;
            addFood();
        }else{
        	snake.pop();
			snake.unshift({
				x:nextX, y:nextY
			});
        }


        // 重绘 screen 覆盖掉上一条蛇
        ctx.beginPath();
    	ctx.fillStyle = "#000000";
    	ctx.fillRect(0, 0, canvas.width, canvas.height);
    	//console.log('chonghui');


		drawSnake();
		drawFood();
		setTimeout(main, snake_speed);

	}


	newGame.onclick = function(){
		canvas.tabIndex = -1;
		canvas.focus();
		init();
		addFood();
		canvas.onkeydown = function(e){
			var e = e || window.event;
			e.stopPropagation();
			changeDir(e.keyCode);
		}
		main();
		//timer = setInterval(main, snake_speed);
		
		newGame.onclick = null;
	}

	gameOver.onclick = function(){
		score = 0;
		scoreBox.innerHTML = '分数：';
		showScreen(2);

		newGame.onclick = function(){
			canvas.tabIndex = -1;
			canvas.focus();
			init();
			addFood();
			canvas.onkeydown = function(e){
				var e = e || window.event;
				e.stopPropagation();
				changeDir(e.keyCode);
			}
			main();
			//timer = setInterval(main, snake_speed);
			
			newGame.onclick = null;
		}
	}
}