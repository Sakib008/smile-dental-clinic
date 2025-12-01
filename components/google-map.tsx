"use client"

import { useEffect, useRef } from "react"

interface GoogleMapProps {
    address?: string
    lat?: number
    lng?: number
    zoom?: number
}

export default function GoogleMap({
    address = "123 Dental Street, London, UK SW1A 1AA",
    lat = 51.5074,
    lng = -0.1278,
    zoom = 15
}: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Check if Google Maps API is loaded
        if (typeof window !== "undefined" && window.google && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat, lng },
                zoom,
                styles: [
                    {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }],
                    },
                ],
            })

            // Add marker
            new window.google.maps.Marker({
                position: { lat, lng },
                map,
                title: "SmileBright Dental",
            })
        }
    }, [lat, lng, zoom])

    return (
        <div className="relative w-full h-full">
            <div ref={mapRef} className="w-full h-full rounded-lg" />
            {/* Fallback for when Google Maps is not loaded */}
            <noscript>
                <div className="bg-gray-200 rounded-lg h-full flex items-center justify-center">
                    <p className="text-gray-500">Map requires JavaScript to load</p>
                </div>
            </noscript>
        </div>
    )
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        google: any
    }
}
