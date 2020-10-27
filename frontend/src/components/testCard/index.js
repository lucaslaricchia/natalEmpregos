
import React from 'react'

import './styles.css';
export default function Card(props) {
    return (

        <div class="card-deck no-gutters">
            <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card h-100 mb-4">
                    <div class="card-header">
                        <h5 class="card-title m-0 p-0 font-weight-bolder text-secondary">Connected Devices and Sensors</h5>
                    </div>
                    <div class="card-body text-left">
                        <p class="card-text">Arduino, Raspbery, Watson or Adafruit </p>
                        <span class="font-lead-base font-weight-bold text-muted">20% Off!</span>
                        <div class="promotion-promo">$ 11.5</div>
                        <div class="promotion-price">
                            <div class="promotion-price-desc">Now</div>
                            <div class="promotion-price-text">$ 9.5</div>
                        </div>
                    </div>
                    <div class="card-footer"><a href="#" class="btn btn-warning">Order</a></div>
                </div>
            </div>
        </div>
    )
}

