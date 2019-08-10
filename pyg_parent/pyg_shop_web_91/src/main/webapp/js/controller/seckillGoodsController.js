 //控制层 
app.controller('seckillGoodsController' ,function($scope,$controller   ,seckillGoodsService, $location,uploadService){
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		seckillGoodsService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		seckillGoodsService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

    //定义审核状态数组
    $scope.statuses = ['未申请','申请中','审核通过','已驳回'];
	
	//查询实体 
	$scope.findOne=function(id){				
		seckillGoodsService.findOne($location.search().id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=seckillGoodsService.update( $scope.entity ); //修改  
		}else{
			serviceObject=seckillGoodsService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){			
		//获取选中的复选框			
		seckillGoodsService.dele( $scope.selectIds ).success(
			function(response){
				if(response.success){
					$scope.reloadList();//刷新列表
					$scope.selectIds=[];
				}						
			}		
		);				
	}
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		seckillGoodsService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}

	//从redis中查询秒杀商品列表展示
	$scope.goodsList = [];//保存秒杀商品列表
	$scope.findSeckillGoodsList = function () {
        seckillGoodsService.findAll().success(function (res) {
            $scope.goodsList = res;
        })
    }

    $scope.jumpToGoodsDetail = function (id) {
		location.href="seckill-item.html#?id="+id;
    }

    $scope.image = {url:''};
    $scope.uploadFile = function () {
        //调用uploadService实现上传
        uploadService.uploadFile().success(function (res) {
            if(res.success){
                //成功，回显数据
                $scope.image.url = res.message;
            } else {
                //失败，提示
                alert(res.message);
            }
        })
    }

    //插入一行图片对象
    $scope.insertRow = function () {
        $scope.list.smallPic.push($scope.image);
    }


});	
