<template>
    <div id="toeic">
        <div class="con-vocabulary">
            <div class="vocabulary">
                Executive
            </div>
        </div>
        <div class="con-view-answer">
            <vs-button color="success" type="gradient">Xem đáp án</vs-button>
        </div>
        <div class="con-answer">
            <vs-divider/>
            <div class="answer">
                Executive
            </div>
            <vs-divider/>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
    #toeic{
        height: 100%;
        width: 100%;
    }

    .con-vocabulary{
        height: 100px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .vocabulary{
        color: #B4BAC8;
        font-size: 35px;
    }

    .con-view-answer{
        height: 100px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .con-answer{
        height: calc(100% - 200px);
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        border-top: 1px solid #ccc;
    }

    .answer{
        color: #B4BAC8;
        font-size: 35px;
        padding: 0 10px;
    }
</style>