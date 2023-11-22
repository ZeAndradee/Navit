<script>
    import { onMount } from 'svelte';
    import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
  
    // @ts-ignore
    let canvas;
  
    onMount(() => {
      Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
  
      // @ts-ignore
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // Crie um gradiente
            const gradient = ctx.createLinearGradient(0, 0, 0, 150);
            gradient.addColorStop(0, '#a7cafc');// Cor no topo
            gradient.addColorStop(0.3, '#c6dcfb');// Cor no topo
            gradient.addColorStop(0.6, '#e9f0fa');// Cor no topo
            gradient.addColorStop(1, '#ffffff');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
                    datasets: [
                        {
                            fill: false,
                            
                            borderColor: 'rgba(101, 101, 117, 0.5)',
                            //Linha 2
                            data: [1000, 3000, 4000, 2500, 3500, 2000, 4500, 1500, 5000, 3500, 4000, 2000, 4500],
                            borderDash: [9, 8],
                            borderCapStyle: 'round',
                            tension: 0.4,
                            pointRadius: 0,
                        },
                        {
                            fill: true,
                            backgroundColor: gradient, // Use o gradiente aqui
                            borderColor: 'rgba(0, 106, 255, 0.8)',
                            //Linha 1
                            data: [5000, 2000, 5000, 2000,1800,4000,3800,5000,3000,4900,4500,3500,5000],
                            tension: 0.4,
                            pointRadius: 0,
                        }
                    ]
                },
                options: {
                    layout:{
                        padding: {
                            top: 3,
                        },
                    },
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        }
                    },
                    scales: {
                        x: {
                            display: false,
                            grid: {
                                display: false,
                            }
                        },
                        y: {
                            display: false,
                            grid: {
                                display: false,
                                color: 'transparent',
                            }
                        }
                    }
                },
            });
        }
    }
    });
  </script>
    <div class="card-grafico">
        <div class="header-grafico">
                <div>
                    <div><span style="font-weight:600">Cliques Registrados</span></div>
                </div>
                <div class="intervalo"><span>2023 - Set 2023</span></div>
                <div style="margin-left: 8px;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#656575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <div style="display:flex; flex-direction:row; align-items: center; margin-left:auto; margin-right: 28px; gap:32px">
                    <div class="intervalo2">
                         <div style="width: 10px; height: 10px; background-color: #006AFF; border-radius: 50%; margin-right:8px"></div>
                         <span>Últimos 6 Meses</span>
                    </div>
                    <div class="intervalo2"> 
                        <div style="width: 10px; height: 10px; background-color: #656575; border-radius: 50%;  margin-right:8px"></div>
                        <span>Mesmo Periodo Ano Passado</span>
                    </div>
                </div>
        </div>
    <div>
        <div class="valores-grafico">
            <div class="y-valores">
                <span>5000</span>
                <span>2500</span>
                <span>1000</span>
                <span>500</span>
            </div>
            <div class="grafico">
                <canvas class="canvas-grafico" bind:this={canvas} style="width: 100%; height: 100%;"/>
            </div>
        </div>
        </div>
    </div>

  <style>
    .header-grafico{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 24px;
    }
    .intervalo{
        margin-left: 32px;
    }
    .intervalo2{
        display: flex;
        align-items: center;
    }
    .card-grafico{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 283px;
        background-color: white;
        border-radius: 10px;
        padding: 32px 28px 24px 28px;
        margin-left: 28px;
        margin-top: 28px;
        margin-right: 48px;
    }

    .valores-grafico{
        display: flex; 
        flex-direction:row;
        align-items: center;
    }

    .y-valores{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      margin-top: 10px;
      gap: 30px;
    }
    .grafico{
        width: 100%;
        height: 100%;
        margin-right: 58px;
    }

    .canvas-grafico{
      margin-left: 32px;
      display: flex;
      width: 100%;
    }

    @media (max-width: 1514px) {
        .intervalo2{
            display: none;
        }
    }
  </style>