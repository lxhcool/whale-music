import http from '../http';

export function getBanners() {
  return http({
    url: "banner"
  })
}