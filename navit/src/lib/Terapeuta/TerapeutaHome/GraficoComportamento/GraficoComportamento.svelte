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

    function calculateFontSize() {
        let baseSize = 16;
        let windowWidth = window.innerWidth;
        let scaleFactor = windowWidth / 1800;
        return baseSize * scaleFactor;
    }

    onMount(() => {
        // @ts-ignore
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'radar',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            r: {
                                ticks: {
                                    display: false,
                                    stepSize: 15,
                                    maxTicksLimit: 5
                                },
                                pointLabels: {
                                    font: {
                                        size: calculateFontSize(),
                                        weight: '600',
                                        family: 'Inter',
                                    },
                                    color: 'black',
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
        height: 100%;
        width: 80%;
        min-width: 280px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid #E0E4EC;
        padding: 10px;
    }

    .grafico{
        width: 100%;
        height: 100%;
    }
</style>