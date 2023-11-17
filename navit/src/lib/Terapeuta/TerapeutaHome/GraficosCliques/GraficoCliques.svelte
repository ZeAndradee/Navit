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
            const gradient = ctx.createLinearGradient(0, 0, 0, 250);
            gradient.addColorStop(0, '#a7cafc');// Cor no topo
            gradient.addColorStop(0.3, '#c6dcfb');// Cor no topo
            gradient.addColorStop(0.6, '#e9f0fa');// Cor no topo
            gradient.addColorStop(1, '#ffffff');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
                    datasets: [{
                        fill: true,
                        backgroundColor: gradient, // Use o gradiente aqui
                        borderColor: 'rgba(0, 106, 255, 0.8)',
                        //Linha 1
                        data: [5000, 2000, 5000, 2000,1800,4000,3800,5000,3000,4900,4500,3500,5000],
                        tension: 0.4,
                        pointRadius: 0,
                    },
                    {
                    fill: true,
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    borderColor: 'rgba(255, 0, 0, 0.8)',
                    //Linha 2
                    data: [5, 15, 10, 3, 25, 35, 50],
                    tension: 0.0,
                    pointRadius: 0,
                    }]
                },
                options: {
                    
                    maintainAspectRatio: true,
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
        <div class="valores-grafico">
            <div class="y-valores">
                <span>5000</span>
                <span>2500</span>
                <span>1000</span>
                <span>500</span>
            </div>
            <div class="grafico">
                <canvas class="canvas-grafico" bind:this={canvas} style="width: 100%; height: 126px;"/>
            </div>
        </div>
        
    </div>

  <style>
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
        margin-right: 6px;
    }
    .valores-grafico{
        display: flex; 
        flex-direction:row;
        border: red solid 1px;
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
    }

    .canvas-grafico{
      margin-left: 32px;
      display: flex;
      width: 100%;
    }
  </style>