<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    // @ts-ignore
    let canvas;

    let data = {
        labels: ['Feliz', 'Confuso', 'Calmo', 'Triste', 'Agitado', 'Atento'],
        datasets: [{
            label: '',
            data: [20, 100, 10, 81, 25, 12],
            fill: true,
            backgroundColor: '#3086FE',
            pointBackgroundColor: '#006AFF',
        }]
    };

    onMount(() => {
        // @ts-ignore
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'radar',
                    data: data,
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            r: {
                                ticks: {
                                    display: false,
                                    stepSize: 15, // Altere para o valor desejado
                                    maxTicksLimit: 5
                                },
                                pointLabels: {
                                    font: {
                                        size: 16,
                                        weight: '600',
                                    },
                                    color: 'black', // Altere para a cor desejada
                                }
                            }
                        },
                        elements: {
                            line: {
                                borderWidth: 3
                            },
                            point: {
                                radius: 5,
                            }
                        }
                    },
                });
            }
        }
    });
</script>

<div class="card-grafico-comportamento">
    <span style="font-weight: 600; color: #1A1919">Média Pacientes</span>
    <div class="grafico">
        <canvas bind:this={canvas}></canvas>
    </div>
</div>

<style>

    .card-grafico-comportamento{
        display: flex;
        flex-direction: column;
        width: 425px;
        background-color: white;
        padding: 20px;
        margin-left: 28px;
        margin-top: 28px;
        border-radius: 10px;
        margin-bottom: 18px;
    }

    .grafico{
        width: 100%;
        height: 100%;
        margin-right: 58px;

    }
</style>