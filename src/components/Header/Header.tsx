'use client'
import React from 'react';
import Logo from "../Logo";
import PrimaryButton from "../PrimaryButton";
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import {Image} from "next/dist/client/image-component";

const Header = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <section className='relative h-screen'>
            <div className='absolute -top-1'>
                <Image
                    className="mr-2"
                    src={img1}
                    alt="img1"
                    style={{height: '50vh', width: '42vw'}}
                />
            </div>
            <div className='flex flex-row justify-between backdrop-blur z-10 p-2'>
                <Logo />
                <div className='pr-4'>
                    <PrimaryButton text='Let’s Chat!'  onClick={handleScrollToBottom}/>
                </div>

            </div>

            <div className='absolute bottom-0 right-0 '>
                <Image
                    className=' object-fit'
                    src={img2}
                    alt="img2"
                    style={{height: '40vh', width: '40vw'}}
                />
            </div>

            <div className="flex flex-col justify-center items-center h-screen gap-1" >
                <svg className='z-20' width="953" height="295" viewBox="0 0 953 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M601 294L-3.12328e-05 294" stroke="white"/>
                    <path d="M295.175 5.09313L272.475 75.0931H251.275L237.875 32.4931L223.875 75.0931H202.675L179.975 5.09313H200.375L214.475 49.7931L229.275 5.09313H247.475L261.575 50.1931L276.275 5.09313H295.175ZM322.566 75.9931C316.766 75.9931 311.532 74.7931 306.866 72.3931C302.199 69.9931 298.532 66.6598 295.866 62.3931C293.266 58.1265 291.966 53.2931 291.966 47.8931C291.966 42.5598 293.266 37.7598 295.866 33.4931C298.532 29.2265 302.166 25.9265 306.766 23.5931C311.432 21.1931 316.699 19.9931 322.566 19.9931C328.432 19.9931 333.699 21.1931 338.366 23.5931C343.032 25.9265 346.666 29.2265 349.266 33.4931C351.866 37.6931 353.166 42.4931 353.166 47.8931C353.166 53.2931 351.866 58.1265 349.266 62.3931C346.666 66.6598 343.032 69.9931 338.366 72.3931C333.699 74.7931 328.432 75.9931 322.566 75.9931ZM322.566 60.8931C325.899 60.8931 328.632 59.7598 330.766 57.4931C332.899 55.1598 333.966 51.9598 333.966 47.8931C333.966 43.8931 332.899 40.7598 330.766 38.4931C328.632 36.2265 325.899 35.0931 322.566 35.0931C319.232 35.0931 316.499 36.2265 314.366 38.4931C312.232 40.7598 311.166 43.8931 311.166 47.8931C311.166 51.9598 312.232 55.1598 314.366 57.4931C316.499 59.7598 319.232 60.8931 322.566 60.8931ZM378.067 27.3931C380.001 24.9265 382.501 23.0931 385.567 21.8931C388.701 20.6265 392.267 19.9931 396.267 19.9931V37.0931C394.534 36.8931 393.101 36.7931 391.967 36.7931C387.901 36.7931 384.701 37.8931 382.367 40.0931C380.101 42.2931 378.967 45.6598 378.967 50.1931V75.0931H359.967V20.8931H378.067V27.3931ZM402.108 0.893135H421.108V75.0931H402.108V0.893135ZM489.055 0.893135V75.0931H470.955V69.6931C467.422 73.8931 462.122 75.9931 455.055 75.9931C450.122 75.9931 445.622 74.8598 441.555 72.5931C437.489 70.2598 434.255 66.9598 431.855 62.6931C429.522 58.4265 428.355 53.4931 428.355 47.8931C428.355 42.2931 429.522 37.3931 431.855 33.1931C434.255 28.9265 437.489 25.6598 441.555 23.3931C445.622 21.1265 450.122 19.9931 455.055 19.9931C461.522 19.9931 466.522 21.8598 470.055 25.5931V0.893135H489.055ZM459.055 60.8931C462.322 60.8931 465.022 59.7598 467.155 57.4931C469.289 55.1598 470.355 51.9598 470.355 47.8931C470.355 43.8931 469.289 40.7598 467.155 38.4931C465.089 36.2265 462.389 35.0931 459.055 35.0931C455.722 35.0931 452.989 36.2265 450.855 38.4931C448.722 40.7598 447.655 43.8931 447.655 47.8931C447.655 51.9598 448.722 55.1598 450.855 57.4931C452.989 59.7598 455.722 60.8931 459.055 60.8931ZM562.181 76.4931C554.848 76.4931 548.248 74.9598 542.381 71.8931C536.581 68.7598 532.015 64.4265 528.681 58.8931C525.348 53.3598 523.681 47.0931 523.681 40.0931C523.681 33.0931 525.348 26.8265 528.681 21.2931C532.015 15.7598 536.581 11.4598 542.381 8.39313C548.248 5.2598 554.848 3.69314 562.181 3.69314C568.581 3.69314 574.348 4.82647 579.481 7.09314C584.615 9.3598 588.881 12.6265 592.281 16.8931L579.681 28.2931C575.148 22.8265 569.648 20.0931 563.181 20.0931C559.381 20.0931 555.981 20.9265 552.981 22.5931C550.048 24.2598 547.748 26.6265 546.081 29.6931C544.481 32.6931 543.681 36.1598 543.681 40.0931C543.681 44.0265 544.481 47.5265 546.081 50.5931C547.748 53.5931 550.048 55.9265 552.981 57.5931C555.981 59.2598 559.381 60.0931 563.181 60.0931C569.648 60.0931 575.148 57.3598 579.681 51.8931L592.281 63.2931C588.881 67.5598 584.615 70.8265 579.481 73.0931C574.348 75.3598 568.581 76.4931 562.181 76.4931ZM598.209 0.893135H617.209V75.0931H598.209V0.893135ZM650.657 19.9931C659.657 19.9931 666.524 22.0598 671.257 26.1931C675.99 30.2598 678.357 36.5265 678.357 44.9931V75.0931H660.657V68.0931C657.924 73.3598 652.59 75.9931 644.657 75.9931C640.457 75.9931 636.824 75.2598 633.757 73.7931C630.69 72.3265 628.357 70.3598 626.757 67.8931C625.224 65.3598 624.457 62.4931 624.457 59.2931C624.457 54.1598 626.424 50.1931 630.357 47.3931C634.29 44.5265 640.357 43.0931 648.557 43.0931H659.357C659.024 37.3598 655.19 34.4931 647.857 34.4931C645.257 34.4931 642.624 34.9265 639.957 35.7931C637.29 36.5931 635.024 37.7265 633.157 39.1931L626.757 26.2931C629.757 24.2931 633.39 22.7598 637.657 21.6931C641.99 20.5598 646.324 19.9931 650.657 19.9931ZM649.957 63.9931C652.157 63.9931 654.09 63.4598 655.757 62.3931C657.424 61.3265 658.624 59.7598 659.357 57.6931V52.9931H651.157C645.624 52.9931 642.857 54.8265 642.857 58.4931C642.857 60.1598 643.49 61.4931 644.757 62.4931C646.024 63.4931 647.757 63.9931 649.957 63.9931ZM708.05 75.9931C703.517 75.9931 699.05 75.4931 694.65 74.4931C690.25 73.4265 686.717 72.0598 684.05 70.3931L689.75 57.3931C692.217 58.9265 695.15 60.1598 698.55 61.0931C701.95 61.9598 705.317 62.3931 708.65 62.3931C711.717 62.3931 713.883 62.0931 715.15 61.4931C716.483 60.8265 717.15 59.8931 717.15 58.6931C717.15 57.4931 716.35 56.6598 714.75 56.1931C713.217 55.6598 710.75 55.1598 707.35 54.6931C703.017 54.1598 699.317 53.4598 696.25 52.5931C693.25 51.7265 690.65 50.1265 688.45 47.7931C686.25 45.4598 685.15 42.1931 685.15 37.9931C685.15 34.5265 686.183 31.4598 688.25 28.7931C690.317 26.0598 693.317 23.9265 697.25 22.3931C701.25 20.7931 706.017 19.9931 711.55 19.9931C715.483 19.9931 719.383 20.3931 723.25 21.1931C727.117 21.9931 730.35 23.1265 732.95 24.5931L727.25 37.4931C722.45 34.8265 717.25 33.4931 711.65 33.4931C708.65 33.4931 706.45 33.8598 705.05 34.5931C703.65 35.2598 702.95 36.1598 702.95 37.2931C702.95 38.5598 703.717 39.4598 705.25 39.9931C706.783 40.4598 709.317 40.9598 712.85 41.4931C717.317 42.1598 721.017 42.9265 723.95 43.7931C726.883 44.6598 729.417 46.2598 731.55 48.5931C733.75 50.8598 734.85 54.0598 734.85 58.1931C734.85 61.5931 733.817 64.6598 731.75 67.3931C729.683 70.0598 726.617 72.1598 722.55 73.6931C718.55 75.2265 713.717 75.9931 708.05 75.9931ZM760.738 75.9931C756.204 75.9931 751.738 75.4931 747.338 74.4931C742.938 73.4265 739.404 72.0598 736.738 70.3931L742.438 57.3931C744.904 58.9265 747.838 60.1598 751.238 61.0931C754.638 61.9598 758.004 62.3931 761.337 62.3931C764.404 62.3931 766.571 62.0931 767.838 61.4931C769.171 60.8265 769.838 59.8931 769.838 58.6931C769.838 57.4931 769.038 56.6598 767.438 56.1931C765.904 55.6598 763.438 55.1598 760.038 54.6931C755.704 54.1598 752.004 53.4598 748.938 52.5931C745.938 51.7265 743.338 50.1265 741.138 47.7931C738.938 45.4598 737.838 42.1931 737.838 37.9931C737.838 34.5265 738.871 31.4598 740.938 28.7931C743.004 26.0598 746.004 23.9265 749.938 22.3931C753.938 20.7931 758.704 19.9931 764.238 19.9931C768.171 19.9931 772.071 20.3931 775.938 21.1931C779.804 21.9931 783.038 23.1265 785.638 24.5931L779.938 37.4931C775.138 34.8265 769.938 33.4931 764.337 33.4931C761.338 33.4931 759.138 33.8598 757.738 34.5931C756.338 35.2598 755.638 36.1598 755.638 37.2931C755.638 38.5598 756.404 39.4598 757.938 39.9931C759.471 40.4598 762.004 40.9598 765.538 41.4931C770.004 42.1598 773.704 42.9265 776.638 43.7931C779.571 44.6598 782.104 46.2598 784.238 48.5931C786.438 50.8598 787.538 54.0598 787.538 58.1931C787.538 61.5931 786.504 64.6598 784.438 67.3931C782.371 70.0598 779.304 72.1598 775.238 73.6931C771.238 75.2265 766.404 75.9931 760.738 75.9931ZM131.155 205.093L108.455 275.093H87.2555L73.8555 232.493L59.8555 275.093H38.6555L15.9555 205.093H36.3555L50.4555 249.793L65.2555 205.093H83.4555L97.5555 250.193L112.255 205.093H131.155ZM158.546 275.993C152.746 275.993 147.513 274.793 142.846 272.393C138.179 269.993 134.513 266.66 131.846 262.393C129.246 258.126 127.946 253.293 127.946 247.893C127.946 242.56 129.246 237.76 131.846 233.493C134.513 229.226 138.146 225.926 142.746 223.593C147.413 221.193 152.679 219.993 158.546 219.993C164.413 219.993 169.679 221.193 174.346 223.593C179.013 225.926 182.646 229.226 185.246 233.493C187.846 237.693 189.146 242.493 189.146 247.893C189.146 253.293 187.846 258.126 185.246 262.393C182.646 266.66 179.013 269.993 174.346 272.393C169.679 274.793 164.413 275.993 158.546 275.993ZM158.546 260.893C161.879 260.893 164.613 259.76 166.746 257.493C168.879 255.16 169.946 251.96 169.946 247.893C169.946 243.893 168.879 240.76 166.746 238.493C164.613 236.226 161.879 235.093 158.546 235.093C155.213 235.093 152.479 236.226 150.346 238.493C148.213 240.76 147.146 243.893 147.146 247.893C147.146 251.96 148.213 255.16 150.346 257.493C152.479 259.76 155.213 260.893 158.546 260.893ZM214.048 227.393C215.981 224.926 218.481 223.093 221.548 221.893C224.681 220.626 228.248 219.993 232.248 219.993V237.093C230.514 236.893 229.081 236.793 227.948 236.793C223.881 236.793 220.681 237.893 218.348 240.093C216.081 242.293 214.948 245.66 214.948 250.193V275.093H195.948V220.893H214.048V227.393ZM238.088 200.893H257.088V275.093H238.088V200.893ZM325.036 200.893V275.093H306.936V269.693C303.403 273.893 298.103 275.993 291.036 275.993C286.103 275.993 281.603 274.86 277.536 272.593C273.469 270.26 270.236 266.96 267.836 262.693C265.503 258.426 264.336 253.493 264.336 247.893C264.336 242.293 265.503 237.393 267.836 233.193C270.236 228.926 273.469 225.66 277.536 223.393C281.603 221.126 286.103 219.993 291.036 219.993C297.503 219.993 302.503 221.86 306.036 225.593V200.893H325.036ZM295.036 260.893C298.303 260.893 301.003 259.76 303.136 257.493C305.269 255.16 306.336 251.96 306.336 247.893C306.336 243.893 305.269 240.76 303.136 238.493C301.069 236.226 298.369 235.093 295.036 235.093C291.703 235.093 288.969 236.226 286.836 238.493C284.703 240.76 283.636 243.893 283.636 247.893C283.636 251.96 284.703 255.16 286.836 257.493C288.969 259.76 291.703 260.893 295.036 260.893ZM398.162 276.493C390.828 276.493 384.228 274.96 378.362 271.893C372.562 268.76 367.995 264.426 364.662 258.893C361.328 253.36 359.662 247.093 359.662 240.093C359.662 233.093 361.328 226.826 364.662 221.293C367.995 215.76 372.562 211.46 378.362 208.393C384.228 205.26 390.828 203.693 398.162 203.693C404.562 203.693 410.328 204.826 415.462 207.093C420.595 209.36 424.862 212.626 428.262 216.893L415.662 228.293C411.128 222.826 405.628 220.093 399.162 220.093C395.362 220.093 391.962 220.926 388.962 222.593C386.028 224.26 383.728 226.626 382.062 229.693C380.462 232.693 379.662 236.16 379.662 240.093C379.662 244.026 380.462 247.526 382.062 250.593C383.728 253.593 386.028 255.926 388.962 257.593C391.962 259.26 395.362 260.093 399.162 260.093C405.628 260.093 411.128 257.36 415.662 251.893L428.262 263.293C424.862 267.56 420.595 270.826 415.462 273.093C410.328 275.36 404.562 276.493 398.162 276.493ZM434.19 200.893H453.19V275.093H434.19V200.893ZM486.638 219.993C495.638 219.993 502.504 222.06 507.238 226.193C511.971 230.26 514.338 236.526 514.338 244.993V275.093H496.638V268.093C493.904 273.36 488.571 275.993 480.638 275.993C476.438 275.993 472.804 275.26 469.738 273.793C466.671 272.326 464.338 270.36 462.738 267.893C461.204 265.36 460.438 262.493 460.438 259.293C460.438 254.16 462.404 250.193 466.338 247.393C470.271 244.526 476.338 243.093 484.538 243.093H495.338C495.004 237.36 491.171 234.493 483.837 234.493C481.238 234.493 478.604 234.926 475.938 235.793C473.271 236.593 471.004 237.726 469.138 239.193L462.738 226.293C465.738 224.293 469.371 222.76 473.638 221.693C477.971 220.56 482.304 219.993 486.638 219.993ZM485.938 263.993C488.138 263.993 490.071 263.46 491.738 262.393C493.404 261.326 494.604 259.76 495.338 257.693V252.993H487.138C481.604 252.993 478.838 254.826 478.838 258.493C478.838 260.16 479.471 261.493 480.738 262.493C482.004 263.493 483.738 263.993 485.938 263.993ZM544.03 275.993C539.497 275.993 535.03 275.493 530.63 274.493C526.23 273.426 522.697 272.06 520.03 270.393L525.73 257.393C528.197 258.926 531.13 260.16 534.53 261.093C537.93 261.96 541.297 262.393 544.63 262.393C547.697 262.393 549.864 262.093 551.13 261.493C552.464 260.826 553.13 259.893 553.13 258.693C553.13 257.493 552.33 256.66 550.73 256.193C549.197 255.66 546.73 255.16 543.33 254.693C538.997 254.16 535.297 253.46 532.23 252.593C529.23 251.726 526.63 250.126 524.43 247.793C522.23 245.46 521.13 242.193 521.13 237.993C521.13 234.526 522.164 231.46 524.23 228.793C526.297 226.06 529.297 223.926 533.23 222.393C537.23 220.793 541.997 219.993 547.53 219.993C551.464 219.993 555.364 220.393 559.23 221.193C563.097 221.993 566.33 223.126 568.93 224.593L563.23 237.493C558.43 234.826 553.23 233.493 547.63 233.493C544.63 233.493 542.43 233.86 541.03 234.593C539.63 235.26 538.93 236.16 538.93 237.293C538.93 238.56 539.697 239.46 541.23 239.993C542.764 240.46 545.297 240.96 548.83 241.493C553.297 242.16 556.997 242.926 559.93 243.793C562.864 244.66 565.397 246.26 567.53 248.593C569.73 250.86 570.83 254.06 570.83 258.193C570.83 261.593 569.797 264.66 567.73 267.393C565.664 270.06 562.597 272.16 558.53 273.693C554.53 275.226 549.697 275.993 544.03 275.993ZM596.718 275.993C592.185 275.993 587.718 275.493 583.318 274.493C578.918 273.426 575.385 272.06 572.718 270.393L578.418 257.393C580.885 258.926 583.818 260.16 587.218 261.093C590.618 261.96 593.985 262.393 597.318 262.393C600.385 262.393 602.551 262.093 603.818 261.493C605.151 260.826 605.818 259.893 605.818 258.693C605.818 257.493 605.018 256.66 603.418 256.193C601.885 255.66 599.418 255.16 596.018 254.693C591.685 254.16 587.985 253.46 584.918 252.593C581.918 251.726 579.318 250.126 577.118 247.793C574.918 245.46 573.818 242.193 573.818 237.993C573.818 234.526 574.851 231.46 576.918 228.793C578.985 226.06 581.985 223.926 585.918 222.393C589.918 220.793 594.685 219.993 600.218 219.993C604.151 219.993 608.051 220.393 611.918 221.193C615.785 221.993 619.018 223.126 621.618 224.593L615.918 237.493C611.118 234.826 605.918 233.493 600.318 233.493C597.318 233.493 595.118 233.86 593.718 234.593C592.318 235.26 591.618 236.16 591.618 237.293C591.618 238.56 592.385 239.46 593.918 239.993C595.451 240.46 597.985 240.96 601.518 241.493C605.985 242.16 609.685 242.926 612.618 243.793C615.551 244.66 618.085 246.26 620.218 248.593C622.418 250.86 623.518 254.06 623.518 258.193C623.518 261.593 622.485 264.66 620.418 267.393C618.351 270.06 615.285 272.16 611.218 273.693C607.218 275.226 602.385 275.993 596.718 275.993ZM720.907 275.093L720.707 237.993L702.707 268.193H693.907L676.007 238.993V275.093H657.707V205.093H674.007L698.607 245.493L722.607 205.093H738.907L739.107 275.093H720.907ZM807.217 220.893V275.093H789.117V269.293C787.117 271.493 784.717 273.16 781.917 274.293C779.117 275.426 776.151 275.993 773.017 275.993C766.017 275.993 760.417 273.926 756.217 269.793C752.084 265.66 750.017 259.46 750.017 251.193V220.893H769.017V248.093C769.017 252.16 769.784 255.126 771.317 256.993C772.851 258.86 775.084 259.793 778.017 259.793C781.017 259.793 783.451 258.76 785.317 256.693C787.251 254.56 788.217 251.326 788.217 246.993V220.893H807.217ZM837.155 275.993C832.622 275.993 828.155 275.493 823.755 274.493C819.355 273.426 815.822 272.06 813.155 270.393L818.855 257.393C821.322 258.926 824.255 260.16 827.655 261.093C831.055 261.96 834.422 262.393 837.755 262.393C840.822 262.393 842.989 262.093 844.255 261.493C845.589 260.826 846.255 259.893 846.255 258.693C846.255 257.493 845.455 256.66 843.855 256.193C842.322 255.66 839.855 255.16 836.455 254.693C832.122 254.16 828.422 253.46 825.355 252.593C822.355 251.726 819.755 250.126 817.555 247.793C815.355 245.46 814.255 242.193 814.255 237.993C814.255 234.526 815.289 231.46 817.355 228.793C819.422 226.06 822.422 223.926 826.355 222.393C830.355 220.793 835.122 219.993 840.655 219.993C844.589 219.993 848.489 220.393 852.355 221.193C856.222 221.993 859.455 223.126 862.055 224.593L856.355 237.493C851.555 234.826 846.355 233.493 840.755 233.493C837.755 233.493 835.555 233.86 834.155 234.593C832.755 235.26 832.055 236.16 832.055 237.293C832.055 238.56 832.822 239.46 834.355 239.993C835.889 240.46 838.422 240.96 841.955 241.493C846.422 242.16 850.122 242.926 853.055 243.793C855.989 244.66 858.522 246.26 860.655 248.593C862.855 250.86 863.955 254.06 863.955 258.193C863.955 261.593 862.922 264.66 860.855 267.393C858.789 270.06 855.722 272.16 851.655 273.693C847.655 275.226 842.822 275.993 837.155 275.993ZM870.143 220.893H889.143V275.093H870.143V220.893ZM879.643 214.893C876.176 214.893 873.376 213.926 871.243 211.993C869.11 210.06 868.043 207.66 868.043 204.793C868.043 201.926 869.11 199.526 871.243 197.593C873.376 195.66 876.176 194.693 879.643 194.693C883.11 194.693 885.91 195.626 888.043 197.493C890.176 199.293 891.243 201.626 891.243 204.493C891.243 207.493 890.176 209.993 888.043 211.993C885.91 213.926 883.11 214.893 879.643 214.893ZM927.191 275.993C921.191 275.993 915.824 274.793 911.091 272.393C906.357 269.993 902.657 266.66 899.991 262.393C897.391 258.126 896.091 253.293 896.091 247.893C896.091 242.493 897.391 237.693 899.991 233.493C902.657 229.226 906.357 225.926 911.091 223.593C915.824 221.193 921.191 219.993 927.191 219.993C933.324 219.993 938.624 221.326 943.091 223.993C947.557 226.593 950.724 230.226 952.591 234.893L937.891 242.393C935.424 237.526 931.824 235.093 927.091 235.093C923.691 235.093 920.857 236.226 918.591 238.493C916.391 240.76 915.291 243.893 915.291 247.893C915.291 251.96 916.391 255.16 918.591 257.493C920.857 259.76 923.691 260.893 927.091 260.893C931.824 260.893 935.424 258.46 937.891 253.593L952.591 261.093C950.724 265.76 947.557 269.426 943.091 272.093C938.624 274.693 933.324 275.993 927.191 275.993Z" fill="#FFFF00"/>
                    <path d="M190.867 105.093L145.567 175.093H140.567L123.267 105.093H128.667L144.167 168.493L185.267 105.093H190.867ZM194.171 122.893H199.171L188.771 175.093H183.771L194.171 122.893ZM199.771 110.193C198.704 110.193 197.804 109.826 197.071 109.093C196.337 108.36 195.971 107.493 195.971 106.493C195.971 105.293 196.371 104.26 197.171 103.393C198.037 102.526 199.104 102.093 200.371 102.093C201.437 102.093 202.337 102.46 203.071 103.193C203.871 103.926 204.271 104.793 204.271 105.793C204.271 107.06 203.837 108.126 202.971 108.993C202.104 109.793 201.037 110.193 199.771 110.193ZM220.945 133.893C223.278 130.093 226.245 127.26 229.845 125.393C233.512 123.46 237.945 122.493 243.145 122.493L242.245 127.393L240.645 127.293C234.712 127.293 229.845 129.06 226.045 132.593C222.245 136.126 219.645 141.36 218.245 148.293L212.845 175.093H207.845L218.245 122.893H223.145L220.945 133.893ZM300.733 122.893L290.333 175.093H285.533L287.533 164.893C285 168.226 281.833 170.826 278.033 172.693C274.3 174.56 270.133 175.493 265.533 175.493C258.733 175.493 253.267 173.56 249.133 169.693C245.067 165.76 243.033 160.46 243.033 153.793C243.033 147.86 244.3 142.526 246.833 137.793C249.367 132.993 252.867 129.26 257.333 126.593C261.867 123.86 266.933 122.493 272.533 122.493C277.933 122.493 282.4 123.66 285.933 125.993C289.467 128.326 291.867 131.626 293.133 135.893L295.733 122.893H300.733ZM266.533 170.993C271.2 170.993 275.367 169.86 279.033 167.593C282.767 165.326 285.7 162.193 287.833 158.193C289.967 154.126 291.033 149.56 291.033 144.493C291.033 138.96 289.4 134.66 286.133 131.593C282.933 128.526 278.4 126.993 272.533 126.993C267.867 126.993 263.667 128.16 259.933 130.493C256.267 132.76 253.367 135.926 251.233 139.993C249.1 143.993 248.033 148.493 248.033 153.493C248.033 159.026 249.633 163.326 252.833 166.393C256.1 169.46 260.667 170.993 266.533 170.993ZM324.114 100.893H329.114L314.314 175.093H309.314L324.114 100.893ZM443.871 105.093L429.871 175.093H424.871L436.771 115.593L398.071 165.793H395.571L375.771 114.893L363.771 175.093H358.771L372.771 105.093H376.971L397.871 159.193L439.371 105.093H443.871ZM507.577 122.893L497.177 175.093H492.377L494.377 164.893C491.844 168.226 488.677 170.826 484.877 172.693C481.144 174.56 476.977 175.493 472.377 175.493C465.577 175.493 460.11 173.56 455.977 169.693C451.91 165.76 449.877 160.46 449.877 153.793C449.877 147.86 451.144 142.526 453.677 137.793C456.21 132.993 459.71 129.26 464.177 126.593C468.71 123.86 473.777 122.493 479.377 122.493C484.777 122.493 489.244 123.66 492.777 125.993C496.31 128.326 498.71 131.626 499.977 135.893L502.577 122.893H507.577ZM473.377 170.993C478.044 170.993 482.21 169.86 485.877 167.593C489.61 165.326 492.544 162.193 494.677 158.193C496.81 154.126 497.877 149.56 497.877 144.493C497.877 138.96 496.244 134.66 492.977 131.593C489.777 128.526 485.244 126.993 479.377 126.993C474.71 126.993 470.51 128.16 466.777 130.493C463.11 132.76 460.21 135.926 458.077 139.993C455.944 143.993 454.877 148.493 454.877 153.493C454.877 159.026 456.477 163.326 459.677 166.393C462.944 169.46 467.51 170.993 473.377 170.993ZM529.257 133.893C531.591 130.093 534.557 127.26 538.157 125.393C541.824 123.46 546.257 122.493 551.457 122.493L550.557 127.393L548.957 127.293C543.024 127.293 538.157 129.06 534.357 132.593C530.557 136.126 527.957 141.36 526.557 148.293L521.157 175.093H516.157L526.557 122.893H531.457L529.257 133.893ZM580.834 144.193L599.634 175.093H593.834L576.934 147.193L560.734 159.693L557.634 175.093H552.634L567.434 100.893H572.434L562.034 153.193L600.934 122.893H608.234L580.834 144.193ZM610.403 150.093C610.269 151.56 610.203 152.66 610.203 153.393C610.203 159.06 611.836 163.426 615.103 166.493C618.369 169.493 623.169 170.993 629.503 170.993C633.169 170.993 636.536 170.393 639.603 169.193C642.736 167.926 645.336 166.193 647.403 163.993L649.703 167.493C647.369 170.026 644.369 171.993 640.703 173.393C637.103 174.793 633.236 175.493 629.103 175.493C621.703 175.493 615.869 173.56 611.603 169.693C607.403 165.826 605.303 160.46 605.303 153.593C605.303 147.726 606.536 142.426 609.003 137.693C611.469 132.96 614.869 129.26 619.203 126.593C623.536 123.86 628.403 122.493 633.803 122.493C640.603 122.493 646.003 124.426 650.003 128.293C654.003 132.16 656.003 137.493 656.003 144.293C656.003 145.893 655.803 147.826 655.403 150.093H610.403ZM633.703 126.793C628.036 126.793 623.136 128.56 619.003 132.093C614.936 135.626 612.269 140.326 611.003 146.193H651.203C651.269 145.593 651.303 144.726 651.303 143.593C651.303 138.326 649.703 134.226 646.503 131.293C643.303 128.293 639.036 126.793 633.703 126.793ZM672.968 159.993C672.702 161.26 672.568 162.493 672.568 163.693C672.568 168.693 675.235 171.193 680.568 171.193C683.768 171.193 686.602 170.226 689.068 168.293L690.568 171.993C687.702 174.326 683.968 175.493 679.368 175.493C675.635 175.493 672.702 174.526 670.568 172.593C668.502 170.593 667.468 167.86 667.468 164.393C667.468 162.993 667.602 161.66 667.868 160.393L674.568 127.193H664.868L665.668 122.893H675.368L677.668 111.493H682.668L680.368 122.893H696.968L696.168 127.193H679.568L672.968 159.993ZM712.112 122.893H717.112L706.712 175.093H701.712L712.112 122.893ZM717.712 110.193C716.645 110.193 715.745 109.826 715.012 109.093C714.279 108.36 713.912 107.493 713.912 106.493C713.912 105.293 714.312 104.26 715.112 103.393C715.979 102.526 717.045 102.093 718.312 102.093C719.379 102.093 720.279 102.46 721.012 103.193C721.812 103.926 722.212 104.793 722.212 105.793C722.212 107.06 721.779 108.126 720.912 108.993C720.045 109.793 718.979 110.193 717.712 110.193ZM760.686 122.493C766.62 122.493 771.186 123.993 774.386 126.993C777.586 129.926 779.186 133.993 779.186 139.193C779.186 140.993 778.986 142.893 778.586 144.893L772.586 175.093H767.586L773.586 144.893C773.92 143.36 774.086 141.693 774.086 139.893C774.086 135.76 772.82 132.593 770.286 130.393C767.82 128.126 764.186 126.993 759.386 126.993C753.386 126.993 748.386 128.693 744.386 132.093C740.386 135.426 737.753 140.293 736.486 146.693L730.786 175.093H725.786L736.186 122.893H741.086L739.086 132.793C741.553 129.326 744.62 126.76 748.286 125.093C752.02 123.36 756.153 122.493 760.686 122.493ZM848.769 122.893L839.469 169.493C837.736 178.36 834.469 184.793 829.669 188.793C824.869 192.86 818.236 194.893 809.769 194.893C804.969 194.893 800.636 194.16 796.769 192.693C792.902 191.293 789.702 189.293 787.169 186.693L790.369 182.993C792.502 185.326 795.269 187.126 798.669 188.393C802.069 189.726 805.902 190.393 810.169 190.393C817.102 190.393 822.536 188.76 826.469 185.493C830.402 182.226 833.036 177.16 834.369 170.293L835.969 162.493C833.369 165.893 830.136 168.526 826.269 170.393C822.402 172.26 818.102 173.193 813.369 173.193C806.369 173.193 800.802 171.326 796.669 167.593C792.602 163.86 790.569 158.793 790.569 152.393C790.569 146.793 791.836 141.726 794.369 137.193C796.902 132.593 800.436 128.993 804.969 126.393C809.502 123.793 814.602 122.493 820.269 122.493C825.736 122.493 830.302 123.66 833.969 125.993C837.636 128.326 840.102 131.726 841.369 136.193L843.969 122.893H848.769ZM814.269 168.693C819.002 168.693 823.236 167.626 826.969 165.493C830.702 163.293 833.636 160.293 835.769 156.493C837.902 152.626 838.969 148.293 838.969 143.493C838.969 138.293 837.302 134.26 833.969 131.393C830.702 128.46 826.136 126.993 820.269 126.993C815.536 126.993 811.302 128.093 807.569 130.293C803.836 132.426 800.902 135.426 798.769 139.293C796.636 143.093 795.569 147.393 795.569 152.193C795.569 157.393 797.202 161.46 800.469 164.393C803.802 167.26 808.402 168.693 814.269 168.693Z" fill="white"/>
                    <rect x="833.757" y="121.539" width="73.6088" height="87.212" rx="36.8044" transform="rotate(-10 833.757 121.539)" fill="#212121"/>
                    <path d="M855.442 155.489L856.313 160.425L864.145 159.044L864.595 161.593L856.762 162.974L857.857 169.184L854.845 169.715L851.984 153.494L863.826 151.406L864.271 153.932L855.442 155.489ZM877.5 165.959C875.847 166.251 874.294 166.159 872.84 165.682C871.383 165.19 870.165 164.378 869.184 163.244C868.201 162.096 867.571 160.733 867.293 159.158C867.015 157.582 867.143 156.094 867.677 154.694C868.208 153.278 869.075 152.098 870.278 151.153C871.479 150.192 872.905 149.566 874.558 149.275C876.211 148.983 877.766 149.084 879.223 149.575C880.677 150.052 881.894 150.857 882.874 151.99C883.855 153.123 884.485 154.486 884.766 156.077C885.046 157.668 884.92 159.164 884.386 160.564C883.852 161.964 882.985 163.145 881.785 164.105C880.581 165.05 879.153 165.668 877.5 165.959ZM877.034 163.318C878.116 163.127 879.047 162.716 879.828 162.085C880.606 161.438 881.165 160.638 881.507 159.686C881.846 158.718 881.921 157.693 881.73 156.612C881.539 155.531 881.12 154.601 880.474 153.823C879.824 153.03 879.024 152.47 878.075 152.143C877.122 151.801 876.106 151.726 875.024 151.917C873.943 152.107 873.013 152.526 872.235 153.173C871.454 153.804 870.895 154.604 870.555 155.572C870.214 156.524 870.138 157.541 870.329 158.622C870.519 159.704 870.94 160.641 871.589 161.435C872.236 162.213 873.036 162.772 873.988 163.114C874.938 163.441 875.953 163.508 877.034 163.318ZM900.466 161.671L896.314 157.505C896.178 157.545 895.971 157.589 895.693 157.638L892.031 158.284L892.865 163.011L889.852 163.543L886.992 147.321L893.666 146.145C895.072 145.897 896.333 145.913 897.45 146.194C898.582 146.472 899.503 146.995 900.211 147.762C900.92 148.529 901.379 149.508 901.589 150.697C901.804 151.918 901.688 153.021 901.241 154.008C900.809 154.992 900.075 155.798 899.039 156.427L903.71 161.099L900.466 161.671ZM898.553 151.232C898.371 150.197 897.891 149.462 897.113 149.025C896.335 148.589 895.29 148.487 893.976 148.718L890.454 149.339L891.594 155.805L895.116 155.183C896.43 154.952 897.377 154.498 897.959 153.822C898.538 153.131 898.736 152.267 898.553 151.232Z" fill="white"/>
                    <rect x="833.757" y="121.539" width="73.6088" height="87.212" rx="36.8044" transform="rotate(-10 833.757 121.539)" stroke="white" stroke-width="1.30726"/>
                </svg>


            </div>
        </section>

    );
};

export default Header;